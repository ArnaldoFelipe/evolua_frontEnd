import { ChangeDetectorRef, Component } from '@angular/core';
import { ArnoldService } from '../../../../core/services/arnold-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arnold-chat',
  imports: [FormsModule, CommonModule],
  templateUrl: './arnold-chat.html',
  styleUrl: './arnold-chat.scss',
})
export class ArnoldChat {

  isChatOpen = false;
  mensagem = '';
  mensagens: {texto: string; tipo : 'user' | 'bot'}[] = [
    {
      texto: 'Olá! Sou o Arnold, seu assistente fitness! Como posso te ajudar hoje?',
      tipo: 'bot'
    }
  ];

  constructor(private arnoldService: ArnoldService,
              private cd: ChangeDetectorRef,
              public router: Router
  ){}

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  enviarMensagem(): void{
    if(!this.mensagem.trim()) return;

    const texto = this.mensagem

    this.mensagens.push({
      texto,
      tipo: 'user'
    });

    this.mensagem = '';

    this.arnoldService.chat(texto).subscribe({
      next: (res) => {
        this.mensagens.push({
          texto: res.mensagem,
          tipo: 'bot'
        });

        this.cd.detectChanges();
        console.log('Reposta completa', res)
      },
      error: ()=> {
        this.mensagens.push({
          texto: 'Erro ao falar com Arnold',
          tipo: 'bot'
        });
      }
    });
  }
}
