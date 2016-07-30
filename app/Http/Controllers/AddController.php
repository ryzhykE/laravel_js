<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Book;
use App\User;
use Illuminate\Support\Facades\Response;

class AddController extends Controller
{
   public function takeBook($bookid,$userid) {
              
        $book = Book::find($bookid);
        $user = User::find($userid);
        $book->user_id = $userid;
        if ($book->save()) {
            return Response::json([
                    'new book' => $bookid,
                    200]);            
        } else {
            return Response::json([
                    'error' => true,
                    404]);            
            }
        }
        
    

    public function returnBook($bookid,$userid){
        
        $book = Book::find($bookid);
        $book->user_id = null;
        if ($book->save()) {
              return Response::json([
                    'returned' => true,
                    200]);   
            
        } else {
            return Response::json([
                    'error' => true,
                    404]);
        }
    }    
}
