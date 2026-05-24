# 🏆 Álbum Copa 2026 — Família

App web pra família curtir junta o álbum **Panini FIFA World Cup 2026** + bolão dos 104 jogos + castigos divertidos pra quem chutar pior. 🎯

## ✨ O que tem

- 📖 **Álbum:** 980 figurinhas (48 seleções × 20 + 20 especiais) com **nomes reais** dos jogadores (Alisson, Messi, Vinicius Jr, Haaland...). Clique cicla: `falta → tenho → +1 repetida → ...`
- ⚽ **Bolão:** chute o placar dos 104 jogos. Pontos: 5 placar exato, 3 vencedor, 2 diferença de gols. Mata-mata vale ×2, quartas/semi ×3, **FINAL ×5**! 🔥
- 🔄 **Trocas:** sistema cruza repetidas/faltantes entre os 4 jogadores e diz **exatamente** quem pode trocar o quê (com nome do jogador)
- 🏆 **Ranking:** quem colou mais figurinhas + quem tá ganhando o bolão
- 😈 **Castigos:** quem ficar em último em cada fase paga uma penalidade votada pelos outros 3 (cantar funk, comer brigadeiro com mostarda, pagar pizza...)
- 🤖 **Resultados automáticos:** os placares dos jogos vêm do [openfootball/worldcup.json](https://github.com/openfootball/worldcup.json) (domínio público, sem chave)

## 👥 Os 4 jogadores

| Avatar | Nome | Senha |
|---|---|---|
| 👫 | Gabriela & Felipe | `gafe123` |
| ⚽ | Lucas | `lucas123` |
| 🦁 | João Pedro | `jp123` |
| 🚀 | Rafa | `rafa123` |

> ⚠️ As senhas ficam em `data.js`. Pra família é tranquilo.

## 🚀 Como publicar (5 passos)

### 1️⃣ Criar projeto Supabase grátis
1. [supabase.com](https://supabase.com) → **New project**
2. Nome `album-copa-2026`, senha forte, região São Paulo
3. Aguarde ~2 min

### 2️⃣ Rodar o schema
1. **SQL Editor** → **New query**
2. Cole `supabase-schema.sql` → **Run**
3. Cria as 4 tabelas e já insere os 4 perfis

### 3️⃣ Pegar credenciais
1. **Settings** → **API**
2. Copie **Project URL** e **anon public**
3. Cole em `config.js`

### 4️⃣ Publicar no GitHub Pages
```bash
cd album_copa_2026
git init
git add .
git commit -m "Álbum Copa 2026"
git branch -M main
gh repo create album-copa-2026 --public --source=. --push
```
GitHub: **Settings** → **Pages** → main / root → Save.

### 5️⃣ Mandar o link no zap
Cada criança escolhe o avatar, digita a senha combinada, curte! 🎉

## 📊 Pontuação do bolão

| Acerto | Pontos base |
|---|---|
| Placar exato | **5** |
| Vencedor + diferença de gols certa | **3 + 2** |
| Só vencedor | **3** |
| Errou | **0** |

**Multiplicadores:** Grupos ×1, Oitavas ×2, Quartas/Semi ×3, **FINAL ×5** 🏆

## 🎨 Identidade visual

🔴 Vermelho (México) → 🔵 Azul (EUA) → 🟢 Verde (Canadá), logo SVG troféu+26, mobile-first.

## 🧰 Tecnologia

- HTML/CSS/JS puro · Supabase (Postgres) · Auth custom · GitHub Pages

---

Feito com 💚 pra família. Boa Copa! 🇧🇷
