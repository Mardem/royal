@extends('layouts.admin-master')

@section('title')
Administração de usuários
@endsection

@section('content')
<section class="section">
  <div class="section-header">
    <h1>Manutenção de usuários</h1>
  </div>
  <div class="section-body">
      <users-component></users-component>
  </div>
</section>
@endsection
