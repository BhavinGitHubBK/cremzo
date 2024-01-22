@extends('core::base.layouts.master')
@section('title')
    {{ translate('Sliders') }}
@endsection
@section('custom_css')
    @include('core::base.includes.data_table.css')
@endsection
@section('main_content')
    <div class="row">
        <div class="col-12">
            <div class="card mb-30">
                <div class="card-body border-bottom2 mb-20">
                    <div class="d-flex justify-content-between align-items-center">
                        <h4 class="font-20">{{ translate('Sliders') }}</h4>
                        <div class="d-flex flex-wrap">
                            <a href="{{ route('theme.tlcommerce.sliders.new') }}"
                                class="btn long">{{ translate('Add New Slider') }}</a>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table id="sliderTable" class="hoverable text-nowrap border-top2">
                        <thead>
                            <tr>
                                <th>
                                    <label class="position-relative mr-2">
                                        <input type="checkbox" name="select_all" class="select-all" onchange="selectAll()">
                                        <span class="checkmark"></span>
                                    </label>
                                </th>
                                <th>{{ translate('Title') }}</th>
                                <th>{{ translate('Desktop') }}</th>
                                <th>{{ translate('Mobile') }}</th>
                                <th>{{ translate('Status') }}</th>
                                <th>{{ translate('Actions') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($sliders as $key => $slider)
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center mb-3">
                                            <label class="position-relative mr-2">
                                                <input type="checkbox" name="items[]" class="item-id"
                                                    value="{{ $slider->id }}">
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </td>
                                    <td>{{ $slider->title }}</td>
                                    <td>
                                        <img src="{{ getFilePath($slider->desktop) }}" class="img-45"
                                            alt="{{ $slider->title }}">
                                    </td>
                                    <td>
                                        <img src="{{ getFilePath($slider->mobile) }}" class="img-45"
                                            alt="{{ $slider->title }}">
                                    </td>
                                    <td>
                                        <label class="switch glow primary medium">
                                            <input type="checkbox" class="change-status" data-slider="{{ $slider->id }}"
                                                {{ $slider->status == '1' ? 'checked' : '' }}>
                                            <span class="control"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div class="dropdown-button">
                                            <a href="#" class="d-flex align-items-center justify-content-end"
                                                data-toggle="dropdown">
                                                <div class="menu-icon mr-0">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="{{ route('theme.tlcommerce.sliders.edit', $slider->id) }}">
                                                    {{ translate('Edit') }}
                                                </a>
                                                <a href="#" class="delete-slider"
                                                    data-slider="{{ $slider->id }}">{{ translate('Delete') }}</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>

    <!--Delete Modal-->
    <div id="delete-modal" class="delete-modal modal fade show" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-sm modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title h6">{{ translate('Delete Confirmation') }}</h4>
                </div>
                <div class="modal-body text-center">
                    <p class="mt-1">{{ translate('Are you sure to delete this') }}?</p>
                    <form method="POST" action="{{ route('theme.tlcommerce.sliders.delete') }}">
                        @csrf
                        <input type="hidden" id="delete-slider-id" name="id">
                        <button type="button" class="btn long mt-2 btn-danger"
                            data-dismiss="modal">{{ translate('cancel') }}</button>
                        <button type="submit" class="btn long mt-2">{{ translate('Delete') }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--Delete Modal-->
@endsection
@section('custom_scripts')
    @include('core::base.includes.data_table.script')
    <script>
        $(function() {
            $("#sliderTable").DataTable({
                "responsive": false,
                "scrolX": true,
                "lengthChange": true,
                "autoWidth": false,
            }).buttons().container().appendTo('#sliderTable_wrapper .col-md-6:eq(0)');
            var bulk_actions_dropdown =
                '<div id="bulk-action" class="dataTables_length d-flex"><select class="theme-input-style bulk-action-selection mr-3"><option value="">{{ translate('Bulk Action') }}</option><option value="delete_all">{{ translate('Delete selection') }}</option></select><button class="btn long" onclick="bulkAction()">{{ translate('Apply') }}</button></div>';

            $(bulk_actions_dropdown).insertAfter("#sliderTable_wrapper #sliderTable_length");
        });
        /**
         * 
         * Select all items
         **/
        function selectAll() {
            if ($('.select-all').is(":checked")) {
                $(".item-id").prop("checked", true);
            } else {
                $(".item-id").prop("checked", false);
            }
        }
        /**
         * 
         * Bulk action
         **/
        function bulkAction() {
            let action = $('.bulk-action-selection').val();
            if (action === 'delete_all') {
                var selected_items = [];
                $('input[name^="items"]:checked').each(function() {
                    selected_items.push($(this).val());
                });
                if (selected_items.length > 0) {
                    $.post('{{ route('theme.tlcommerce.sliders.delete.bulk') }}', {
                        _token: '{{ csrf_token() }}',
                        data: selected_items
                    }, function(data) {
                        location.reload();
                    })
                } else {
                    toastr.error('{{ translate('No Item Selected') }}', "Error!");
                }
            } else {
                toastr.error('{{ translate('No Action Selected') }}', "Error!");
            }
        }
        /**
         * 
         * Change  status 
         * 
         * */
        $('.change-status').on('click', function(e) {
            e.preventDefault();
            let $this = $(this);
            let id = $this.data('slider');
            $.post('{{ route('theme.tlcommerce.sliders.update.status') }}', {
                _token: '{{ csrf_token() }}',
                id: id
            }, function(data) {
                location.reload();
            })

        });
        /**
         * 
         * Delete Slider
         * 
         * */
        $('.delete-slider').on('click', function(e) {
            e.preventDefault();
            let $this = $(this);
            let id = $this.data('slider');
            $("#delete-slider-id").val(id);
            $('#delete-modal').modal('show');
        });
    </script>
@endsection
