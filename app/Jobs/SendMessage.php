<?php

namespace App\Jobs;

use App\Events\GotMessage;
use App\Models\Message;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendMessage implements ShouldQueue
{

    public function __construct(public Message $message) {
        //
    }

    public function handle(): void {
        GotMessage::dispatch([
            'id' => $this->message->id,
            'sent_to' => $this->message->sent_to,
            'sent_from' => $this->message->sent_from,
            'message' => $this->message->message,
            'time' => $this->message->time,
        ]);
    }
}
