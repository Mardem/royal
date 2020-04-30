<?php

namespace App\Http\Controllers\Principal;

use App\Models\Contact;
use App\Support\Scopes\MessagesTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use PHPMailer\PHPMailer\PHPMailer;

class ContactController extends Controller
{
    use MessagesTrait;
    public function index()
    {
        return view('principal.contato');
    }

    public function store(Request $request)
    {
        try {
            Contact::create($request->all());
            return redirect()->back()->with('success', 'Sua mensagem foi enviada com sucesso!');
        } catch(\Exception $exception) {
            return redirect()->back()->withInput(Input::all())->with('error', 'Houve um erro ao enviar a mensagem, tente novamente.');
        }
    }
}
