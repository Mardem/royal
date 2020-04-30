<?php

use App\Http\Controllers\HomeController;

Route::namespace('Principal')->group(function () {
    Route::get('/', 'HomeController@index')->name('home-site');
    Route::get('/sobre', 'HomeController@about')->name('about-doctor');
    Route::get('/tour360', 'HomeController@tour360')->name('tour360');
    Route::resource('/contato', 'ContactController')->only(['index', 'store']);
    Route::get('/especialidades', 'HomeController@specialties')->name('specialties');
    Route::get('/servicos', 'ServiceController@show')->name('servicos');

    Route::get('/blog', 'BlogController@index')->name('blog');
    Route::get('/blog/{slug}', 'BlogController@show')->name('blog.show');
});

Route::post('send-bookmark', 'BookmarkController')->name('bookmark');

Route::get('home', function() {
    return redirect(route('admin.dashboard'));
});

Route::name('admin.')->prefix('admin')->middleware('auth')->group(function () {
    Route::get('dashboard', 'DashboardController')->name('dashboard');

    Route::get('users/roles', 'UserController@roles')->name('users.roles');
    Route::resource('users', 'UserController', [
        'names' => [
            'index' => 'users'
        ]
    ]);
    Route::namespace('Admin\Control')->prefix('control')->group(function() {
        Route::prefix('pubs')->group(function() {
            Route::resource('categories', 'CategoriesController');
            Route::resource('posts', 'PostController');
        });
        Route::resource('contacts', 'ContactController');
        Route::resource('portfolio', 'PortfolioController');
        // Settings of site
        Route::namespace('Settings')->group(function() {
            Route::get('settings', 'SettingController')->name('settings.home');

            // General
            Route::namespace('Page')->group(function() {
                // Page General
                Route::get('general', 'GeneralController@index')->name('setting.general');
                Route::post('general', 'GeneralController@save')->name('setting.general-save');

                // Page SEO
                Route::get('seo', 'SEOController@index')->name('setting.seo');
                Route::post('seo', 'SEOController@save')->name('setting.seo-save');

                // Page SEO
                Route::get('embed', 'EmbedCodeController@index')->name('setting.embed');
                Route::post('embed', 'EmbedCodeController@save')->name('setting.embed-save');

                // Page Working Hours
                Route::get('working-hours', 'WorkingHoursController@index')->name('setting.working');
                Route::post('working-hours', 'WorkingHoursController@save')->name('setting.working-save');
            });

        });
    });
});

Route::middleware('auth')->get('logout', function() {
    Auth::logout();
    return redirect(route('login'))->withInfo('You have successfully logged out!');
})->name('logout');

Auth::routes(['verify' => true]);

Route::name('js.')->group(function() {
    Route::get('dynamic.js', 'JsController@dynamic')->name('dynamic');
});

// Get authenticated user
Route::get('users/auth', function() {
    return response()->json(['user' => Auth::check() ? Auth::user() : false]);
});
