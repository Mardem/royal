@extends('layouts.admin-master')

@section('title')
    Criação de publicações
@endsection

@section('content')
    @include('components.notifications')
    <section class="section">
        <div class="section-header">
            <h1>Nova publicação</h1>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Publicação</h4>
                        </div>
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        <form action="{{ route('admin.posts.store') }}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="title">Título da publicação<sup class="text-danger">*</sup></label>
                                            <input type="text" name="title" id="title" value="{{ old('title') }}" class="form-control" required>
                                            <div class="invalid-feedback">
                                                {{ $errors->first('title') }}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="category_id">Categoria da publicação<sup class="text-danger">*</sup></label>
                                            <select id="category_id" name="category_id" class="form-control" required>
                                                @foreach($categories as $category)
                                                    <option value="{{ $category->id }}" {{ old('category_id') == $category->id ? 'selected' : '' }}>{{ $category->name }}</option>
                                                @endforeach
                                            </select>
                                            <div class="invalid-feedback">
                                                {{ $errors->first('category_id') }}
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="image">Imagem <small>(opcional)</small></label>
                                            <input type="file" name="image_path" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="editor">Conteúdo da publicação<sup class="text-danger">*</sup></label>
                                            <textarea name="content" id="editor" required>{{ old('content') }}</textarea>
                                            <div class="invalid-feedback">
                                                {{ $errors->first('content') }}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-primary float-right">Salvar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    </section>
@endsection
@push('css')
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote-lite.css" rel="stylesheet">
@endpush
@push('js')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote-lite.js"></script>
    <script>
        $('#editor').summernote({
            placeholder: 'Escreva sua publicação aqui',
            tabsize: 2,
            height: 100
        });
    </script>
@endpush
