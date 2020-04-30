<?php


namespace App\Support\Traits;


use App\Support\Scopes\QueryGlobalScope;

trait QueryGlobalScopeTrait
{
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new QueryGlobalScope());
    }

    public function getCreatedAtFormattedAttribute() // created_at_formatted
    {
        return $this->getAttribute('created_at')->format('d/m/Y \à\s H:i \h\r\s');
    }
}
