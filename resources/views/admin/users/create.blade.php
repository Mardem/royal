@extends('layouts.admin-master')

@section('title')
Criar usuário
@endsection

@section('content')
<section class="section">
  <div class="section-header">
    <h1>Adicionar novo usuário</h1>
  </div>
  <div class="section-body">
      <adduser-component></adduser-component>
  </div>
</section>
@endsection
