<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Blog\Category::class)->create(['name' => 'Exames']);
        factory(\App\Models\Blog\Category::class)->create(['name' => 'Blog']);
        factory(\App\Models\Blog\Category::class)->create(['name' => 'Tratamentos']);
        factory(\App\Models\Blog\Category::class)->create(['name' => 'Área de atuação']);
    }
}
