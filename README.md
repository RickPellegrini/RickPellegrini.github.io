# Ricardo Pellegrini - Portfolio

Portfolio pessoal desenvolvido com Next.js, React e TypeScript.

## 🚀 Tecnologias

- **Next.js 16** - Framework React para produção
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **GSAP** - Biblioteca de animações

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🌐 Desenvolvimento

O servidor de desenvolvimento estará disponível em [http://localhost:3000](http://localhost:3000)

Para editar a página inicial, modifique `app/page.tsx`. As mudanças são aplicadas automaticamente.

## 📁 Estrutura do Projeto

```
├── app/                    # Diretório principal do Next.js App Router
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── AboutMe.tsx
│   │   ├── FirstTransition.tsx
│   │   ├── Footer.tsx
│   │   ├── HamburgerMenu.tsx
│   │   ├── HeroSection.tsx
│   │   └── ScrollRevealAnimation.tsx
│   ├── favicon.ico
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz da aplicação
│   └── page.tsx           # Página inicial
├── public/                # Arquivos estáticos
├── legacy/                # Versão antiga do site (HTML estático)
└── ...                    # Arquivos de configuração
```

## 🎨 Componentes

- **HeroSection**: Seção hero da página inicial
- **AboutMe**: Seção sobre mim
- **Footer**: Rodapé do site
- **HamburgerMenu**: Menu mobile responsivo
- **FirstTransition**: Animação de transição inicial
- **ScrollRevealAnimation**: Animações de scroll

## 📝 Scripts

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa linter ESLint

## 📄 Licença

Projeto pessoal - Ricardo Pellegrini © 2025

---

Desenvolvido com ❤️ usando Next.js
