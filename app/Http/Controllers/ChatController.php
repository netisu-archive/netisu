<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\SendMessageRequest;
use App\Models\Message;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function SendMessage(SendMessageRequest $request, int $userID)
    {
        if ($userID == Auth::id()) {
            return response()->json(
                [
                    "message" => "You cannot send message to yourself.",
                    "type" => "danger",
                ],
                502
            );
        }

        $message = Message::create([
            'sent_to'   => $userID,
            'sent_from' => Auth::id(),
            'is_system_message' => config("Values.system_account_id") == 1 ? true : false,
            'message'   => $request->message,
        ]);

        broadcast(new SendMessageRequest($message->toArray()))->toOthers();
    }
}
