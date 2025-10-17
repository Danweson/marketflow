# Copilot Instructions for AI Coding Agents

## Project Overview
- **Framework:** Next.js 15, React 19, TypeScript, TailwindCSS, Redux Toolkit
- **Purpose:** eCommerce template (NextMerce Lite) for building online stores
- **Structure:**
  - `src/components/`: Modular UI components (Header, Footer, Shop, Blog, Cart, etc.)
  - `src/app/`: Next.js app directory (routing, context, CSS, fonts)
  - `src/redux/`: Redux store setup and features
  - `src/types/`: TypeScript type definitions for products, blogs, categories, etc.
  - `public/images/`: Static assets for products, blogs, UI

## Key Patterns & Conventions
- **Component Organization:**
  - Each feature (e.g., Blog, Shop, Cart) has its own folder in `src/components/`
  - Shared UI elements are in `src/components/Common/`
- **State Management:**
  - Uses Redux Toolkit (`src/redux/`), with `provider.tsx` for store context
- **Styling:**
  - TailwindCSS is configured via `tailwind.config.ts` and `postcss.config.js`
  - Global styles in `src/app/css/`
- **Type Safety:**
  - All major data structures (products, blogs, categories) are typed in `src/types/`
- **Routing:**
  - Next.js App Router (`src/app/(site)/` for main site pages)

## Developer Workflows
- **Development:**
  - Start: `npm run dev`
  - Build: `npm run build`
  - Lint: `npm run lint`
- **No backend/API or database integration in this lite version**
- **No built-in test scripts** (add as needed)

## Integration Points
- **External Libraries:**
  - Swiper (carousel), react-hot-toast (notifications), react-range-slider-input
- **No authentication, payment, or DB logic in this version**

## Project-Specific Notes
- **Image assets:** Use `public/images/` for all static images referenced in components
- **Extendability:**
  - Add new features by creating a folder in `src/components/` and updating types in `src/types/`
  - For advanced eCommerce (auth, DB, payments), see NextMerce Pro
- **Example:**
  - To add a new product type, update `src/types/product.ts` and relevant components in `src/components/Shop/`

## References
- See `README.md` for high-level project info and links
- Use `src/redux/store.ts` and `provider.tsx` for Redux setup examples
- Tailwind config: `tailwind.config.ts`

---
For more, see [NextMerce](https://nextmerce.com/) or the Pro version for advanced features.
