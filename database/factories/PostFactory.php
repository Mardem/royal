<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Blog\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    $title = $faker->jobTitle;
    return [
        'title' => $title,
        'content' => $faker->text(400),
        'slug' => \Illuminate\Support\Str::slug($title),
        'category_id' => rand(1, 3),
        'user_id' => 1
    ];
});
