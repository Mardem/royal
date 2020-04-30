<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Models\Gallery::class, function (Faker $faker) {
    return [
        'thumb_path' => $faker->imageUrl('250', '166'),
        'path' => $faker->imageUrl('750', '500'),
    ];
});
