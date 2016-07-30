<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'author',
        'genre',
        'year',
        'title'
    ];
    
    public $timestamps=false;
    
    public function user()
    {
        return $this->belongsTo('App\User','book_user_id','id');
    }
}
