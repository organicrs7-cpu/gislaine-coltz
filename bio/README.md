# 🌸 Gislaine Coltz - Link in Bio

Site moderno de "Link in Bio" para Gislaine Coltz, profissional de estética e cursos.

## 📋 Descrição

Este é um projeto desenvolvido com React + TypeScript + Vite, apresentando um design premium com:
- **Glassmorphism** e gradientes modernos
- **Animações suaves** e micro-interações
- **100% Responsivo** para mobile e desktop
- **Paleta de cores personalizada** alinhada com a marca

## 🚀 Como Rodar Localmente

**Pré-requisitos:** Node.js instalado

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Rodar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar no navegador:**
   - Local: http://localhost:3000/
   - Network: http://192.168.0.137:3000/

## 📂 Estrutura do Projeto

```
gislaine-coltz-bio/
├── components/          # Componentes React
│   ├── VisualLinkCard.tsx
│   ├── SimpleLinkButton.tsx
│   └── BrandIcon.tsx
├── App.tsx              # Componente principal
├── index.tsx            # Entry point
├── index.html           # HTML base
└── vite.config.ts       # Configuração Vite
```

## 🎨 Como Adicionar Fotos

Para substituir as fotos de placeholder (picsum.photos) por fotos reais:

1. **Adicione suas imagens à pasta `public/images/`** (criar se não existir)
2. **Atualize os URLs das imagens no `App.tsx`:**
   - Foto de perfil (linha 53)
   - Cursos Presenciais (linha 103)
   - Curso de Drenagem (linha 114)
   - Agendar Atendimento (linha 125)

Exemplo:
```tsx
// De:
imageUrl="https://picsum.photos/id/447/400/400"

// Para:
imageUrl="/images/cursos-presenciais.jpg"
```

## 🎨 Paleta de Cores

- **Primary Light:** `#eaddd5`
- **Primary Dark:** `#9d6a6b`
- **Secondary Peach:** `#cea29b`
- **Secondary Light:** `#f6f5f2`
- **Accent:** `#d8d4c9`

## 🔧 Tecnologias

- React 19
- TypeScript
- Vite
- Lucide React (ícones)

## 📝 Notas

- O servidor de desenvolvimento está rodando em `http://localhost:3000/`
- Todo o código está versionado com Git
- Para fazer alterações, edite os arquivos e o Vite irá recarregar automaticamente
