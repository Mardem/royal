<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Contact;
use Faker\Generator as Faker;

$factory->define(Contact::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'phone' => $faker->phoneNumber,
        'message' => $faker->realText(300)
    ];
});
