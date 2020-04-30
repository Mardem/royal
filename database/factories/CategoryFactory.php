<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Blog\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'name' => $faker->colorName
    ];
});
