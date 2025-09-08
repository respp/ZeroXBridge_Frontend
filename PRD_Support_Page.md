# Technical PRD: Support Page Implementation
## Issue #216: Assemble Support Page

### 📋 Overview
Implement a comprehensive Support Center page for ZeroXBridge DApp using 5 reusable card components with proper layout, search functionality, and navigation.

### 🎯 Objectives
- Create a unified support experience for users
- Provide easy access to FAQs, ticket submission, community resources, guides, and system status
- Implement responsive grid layout with consistent design patterns
- Ensure accessibility and proper navigation

---

## 🏗️ Technical Architecture

### File Structure
```
app/dapp/support/
├── page.tsx                    # Main support page component
├── components/
│   ├── index.ts               # Component exports
│   ├── CommunityCard.tsx      # Community links card
│   ├── GuidesCard.tsx         # Documentation guides card
│   ├── StatusCard.tsx         # System status card
│   ├── FAQCard.tsx            # FAQ card (to be created)
│   ├── SubmitTicketCard.tsx   # Ticket submission card (to be created)
│   ├── SearchBar.tsx          # Search functionality (to be created)
│   └── CTASection.tsx         # Call-to-action section (to be created)
├── ContactForm.tsx            # Existing contact form (from PR #239)
├── contact/
│   └── page.tsx               # Existing contact page (from PR #239)
└── logo.tsx                   # Existing logo component
```

### Component Dependencies
- **Existing Components**: `CommunityCard`, `GuidesCard`, `StatusCard`, `ContactForm`, `PageHeader`, `Footer`, `Logo`
- **New Components**: `FAQCard`, `SubmitTicketCard`, `SearchBar`, `CTASection`
- **UI Components**: `Card`, `Button`, `Input` from `@/components/ui`
- **Icons**: SVG components from `@/svg`
- **Layout Components**: `Navbar`, `PageHeader`, `Footer` from `@/app/dapp/components`

---

## 🎨 Design Specifications

### Layout Structure
```tsx
<SupportPage>
  <PageHeader title="Support Center" description="Find help, guides, and connect with our community" />
  <MainContent>
    <SearchBar />
    <CardGrid>
      <FAQCard />
      <SubmitTicketCard />
      <CommunityCard />
      <GuidesCard />
      <StatusCard />
    </CardGrid>
    <CTASection />
  </MainContent>
  <Footer />
</SupportPage>
```

### Grid Layout
- **Desktop**: 3-column grid (2-2-1 layout)
- **Tablet**: 2-column grid
- **Mobile**: 1-column stack
- **Gap**: 24px (1.5rem)
- **Padding**: 100px (following PR #239 pattern)
- **Container**: 1440px max-width, centered

### Card Specifications
- **Dimensions**: 400px × 481px (existing pattern)
- **Border Radius**: 16px (1rem)
- **Background**: `bg-neutral-900` (dark) / `bg-white` (light)
- **Border**: `border-neutral-800` (dark) / `border-gray-200` (light)
- **Hover States**: Border color change + subtle shadow

---

## 🔧 Component Specifications

### 1. FAQCard Component
```tsx
interface FAQCardProps {
  onClick?: () => void;
  className?: string;
}

// Features:
// - Title: "FAQs"
// - Subtitle: "Find answers to common questions"
// - Icon: Question mark or FAQ icon
// - Navigation: Link to FAQ page or expandable content
```

### 2. SubmitTicketCard Component
```tsx
interface SubmitTicketCardProps {
  onClick?: () => void;
  className?: string;
}

// Features:
// - Title: "Submit Ticket"
// - Subtitle: "Create a support ticket"
// - Icon: Ticket or form icon
// - Navigation: Link to /dapp/support/contact (existing ContactForm)
// - Reuses existing ContactForm.tsx component from PR #239
```

### 3. SearchBar Component
```tsx
interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

// Features:
// - Placeholder: "Search support articles..."
// - Search icon
// - Responsive design
// - UI only (no backend integration required)
```

### 4. CTASection Component
```tsx
interface CTASectionProps {
  title?: string;
  buttonText?: string;
  onContact?: () => void;
  className?: string;
}

// Features:
// - Title: "Didn't find what you're looking for?"
// - Button: "Contact Support"
// - Full-width section
// - Centered content
```

---

## 🎯 Implementation Requirements

### 1. Main Page Component (`page.tsx`)
```tsx
"use client";
import React from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { 
  FAQCard, 
  SubmitTicketCard, 
  CommunityCard, 
  GuidesCard, 
  StatusCard 
} from "./components";
import { SearchBar } from "./components/SearchBar";
import { CTASection } from "./components/CTASection";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page Header (includes Navbar and OnlyDust banner) */}
      <PageHeader 
        title="Support Center"
        description="Find help, guides, and connect with our community"
      />

      {/* Main Content */}
      <main 
        className="bg-black relative"
        style={{
          width: '1440px',
          maxWidth: '100vw',
          margin: '0 auto',
          minHeight: '767px',
        }}
      >
        <div 
          className="flex flex-col items-start gap-[10px]"
          style={{
            padding: '100px',
            width: '100%',
          }}
        >
          {/* Search Bar */}
          <SearchBar 
            placeholder="Search support articles..."
            className="w-full max-w-2xl mb-8"
          />

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <FAQCard />
            <SubmitTicketCard />
            <CommunityCard />
            <GuidesCard />
            <StatusCard />
          </div>

          {/* CTA Section */}
          <CTASection className="w-full mt-8" />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
```

### 2. Responsive Design
- **Breakpoints**: Tailwind CSS responsive classes
- **Mobile First**: Start with mobile layout, enhance for larger screens
- **Touch Targets**: Minimum 44px for interactive elements
- **Accessibility**: Proper ARIA labels and keyboard navigation

### 3. Theme Support
- **Dark/Light Mode**: Use CSS variables and Tailwind classes
- **Consistent Colors**: Follow existing design system
- **Smooth Transitions**: 300ms ease-in-out for hover states

---

## 🔗 Navigation & Routing

### Card Navigation
1. **FAQCard**: `/dapp/support/faq` or expandable content
2. **SubmitTicketCard**: `/dapp/support/contact` (existing ContactForm from PR #239)
3. **CommunityCard**: External links (Telegram, Discord) - existing implementation
4. **GuidesCard**: `/dapp/support/guides` or external docs
5. **StatusCard**: `/status` (external status page) - existing implementation

### URL Structure
```
/dapp/support/           # Main support page
/dapp/support/faq        # FAQ page (future)
/dapp/support/guides     # Guides page (future)
/dapp/support/contact    # Contact form (existing)
```

---

## 🧪 Testing Requirements

### Unit Tests
- Component rendering tests
- Props validation
- Click handlers
- Accessibility attributes

### Integration Tests
- Navigation functionality
- Responsive layout
- Theme switching
- Search bar interaction

### Visual Tests
- Screenshot comparison
- Cross-browser compatibility
- Mobile responsiveness

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Reduced padding (16px)
- Larger touch targets
- Simplified card content

### Tablet (768px - 1024px)
- Two column grid
- Medium padding (20px)
- Balanced content density

### Desktop (> 1024px)
- Three column grid
- Full padding (24px)
- Rich hover effects
- Optimal content spacing

---

## 🎨 Design System Integration

### Colors (Following PR #239 Design System)
```css
/* Dark Theme (Primary) */
--background: #000000
--foreground: #ffffff
--card-bg: #161616
--card-border: #202020
--text-primary: #EEEEEE
--text-secondary: #6C6C6C
--input-bg: #1D1D1D
--input-border: #202020

/* Header Background */
--header-bg: linear-gradient(135deg, #090D10 0%, #0A0A0A 100%)
--header-bg-image: url('/star-noise-2.png')
```

### Typography (Following PR #239 Design System)
- **Page Header**: `text-[36px] lg:text-[48px] 4k:text-[64px] leading-[106%] tracking-[-2%] text-[#EEEEEE]`
- **Page Description**: `text-[16px] 4k:text-[24px] text-[#6C6C6C] leading-relaxed`
- **Card Titles**: `text-xl font-semibold text-white`
- **Card Subtitles**: `text-sm text-neutral-400`
- **Body Text**: `text-base font-normal text-white`

### Spacing (Following PR #239 Design System)
- **Container**: `1440px max-width, centered`
- **Main Content Padding**: `100px`
- **Grid Gap**: `gap-6` (24px)
- **Section Spacing**: `gap-[10px]` (10px)
- **Card Padding**: `p-6` (24px)
- **Header Height**: `xl:h-[406px] 4k:h-[894px]`

---

## 🚀 Performance Considerations

### Optimization
- **Lazy Loading**: Images and non-critical components
- **Code Splitting**: Separate route-based chunks
- **Bundle Size**: Minimize component dependencies
- **Caching**: Static assets and component caching

### Loading States
- **Skeleton Loading**: For dynamic content
- **Progressive Enhancement**: Core functionality first
- **Error Boundaries**: Graceful error handling

---

## 📋 Acceptance Criteria

### ✅ Functional Requirements
- [ ] All 5 cards correctly imported and placed
- [ ] Grid layout matches design specifications
- [ ] Navigation links working properly
- [ ] Search bar UI implemented (no backend required)
- [ ] CTA section with contact support button
- [ ] Responsive design across all breakpoints

### ✅ Technical Requirements
- [ ] Clean, consistent spacing and typography
- [ ] Proper TypeScript types and interfaces
- [ ] Accessibility compliance (WCAG 2.1 AA)
- [ ] Theme support (dark/light mode)
- [ ] Performance optimization
- [ ] Error handling and loading states

### ✅ Deliverables
- [ ] Complete page implementation
- [ ] Screenshot of full page
- [ ] Video showing grid + navigation
- [ ] Unit tests for components
- [ ] Documentation and comments

---

## 🔄 Development Workflow

### Phase 1: Component Creation
1. Create missing card components (`FAQCard`, `SubmitTicketCard`)
2. Implement `SearchBar` component (following ContactForm.tsx input styling)
3. Create `CTASection` component
4. Leverage existing `ContactForm.tsx` for SubmitTicketCard navigation

### Phase 2: Page Assembly
1. Update main `page.tsx` with PageHeader and Footer (following PR #239 pattern)
2. Integrate all components with existing design system
3. Implement responsive grid system
4. Apply consistent styling from ContactForm.tsx

### Phase 3: Polish & Testing
1. Add hover states and animations
2. Implement accessibility features
3. Test across devices and browsers
4. Create screenshots and video

### Phase 4: Documentation
1. Update component documentation
2. Add usage examples
3. Create testing documentation

---

## 📝 Notes

- **Branch**: All work must be done on `app-main` branch
- **Fork**: Fork from `app-main` before starting
- **PR Target**: Submit PR back to `app-main` (not `main`)
- **Scope**: Keep implementation simple and consistent
- **Testing**: Screenshot and video required for submission
- **Design Reference**: Follow patterns from [PR #239](https://github.com/Explore-Beyond-Innovations/ZeroXBridge_Frontend/pull/239) Contact Us form
- **Existing Components**: Leverage `ContactForm.tsx`, `PageHeader.tsx`, `Footer.tsx`, and `Logo.tsx` from PR #239

---

*This PRD is based on the requirements from [Issue #216](https://github.com/Explore-Beyond-Innovations/ZeroXBridge_Frontend/issues/216) and the existing codebase structure.*
