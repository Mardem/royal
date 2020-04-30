<?php

namespace App\Models;

use App\Support\Traits\QueryGlobalScopeTrait;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use QueryGlobalScopeTrait;
    protected $fillable = ['name', 'email', 'phone', 'message', 'read', 'date_schedule', 'type'];

    public function getReadFormattedAttribute() // read_formatted
    {
        if($this->getAttribute('read') == 0) {
            $status = '<span class="badge badge-danger">Não lido</span>';
        } else {
            $status = '<span class="badge badge-light">Lido</span>';
        }
        return $status;
    }

    public function scopeBookmark($query)
    {
        return $query->where('type', 1);
    }
    public function scopeContact($query)
    {
        return $query->where('type', 0);
    }

    public function getScheduleDateFormattedAttribute() // schedule_date_formatted
    {
        $this->getAttribute('date_schedule')->format('d/m/Y \à\s H:i \h\r\s');
    }
}
