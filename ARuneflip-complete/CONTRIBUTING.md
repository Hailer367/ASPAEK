# Contributing to RuneFlip

Thank you for your interest in contributing to RuneFlip! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Supabase account (for backend development)

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/runeflip.git`
3. Install dependencies: `npm install`
4. Copy environment variables: `cp .env.example .env.local`
5. Start development server: `npm run dev`

## 📋 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

### Component Structure
```
components/
├── ui/           # Reusable UI components
├── game/         # Game-specific components
├── layout/       # Layout components
└── admin/        # Admin dashboard components
```

### Naming Conventions
- Components: PascalCase (`GameInterface.tsx`)
- Files: kebab-case (`user-stats.ts`)
- Variables: camelCase (`userStats`)
- Constants: UPPER_SNAKE_CASE (`PLATFORM_FEE`)

## 🐛 Bug Reports

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information
- Screenshots if applicable

## ✨ Feature Requests

For new features:
- Check existing issues first
- Provide detailed description
- Explain the use case
- Consider implementation complexity

## 🔧 Pull Request Process

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Add tests if applicable
4. Update documentation
5. Commit with clear messages
6. Push to your fork
7. Create a pull request

### PR Requirements
- [ ] Code follows style guidelines
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)
- [ ] Responsive design maintained

## 🧪 Testing

### Running Tests
```bash
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
npm run type-check    # TypeScript checking
```

### Writing Tests
- Write tests for new features
- Update tests for modified code
- Use descriptive test names
- Mock external dependencies

## 📚 Documentation

### Code Documentation
- Use JSDoc for functions
- Comment complex logic
- Update README for new features
- Include examples in documentation

### API Documentation
- Document new API endpoints
- Include request/response examples
- Update OpenAPI specs if applicable

## 🎨 Design Guidelines

### UI/UX Principles
- Mobile-first responsive design
- Accessibility compliance (WCAG 2.1)
- Consistent with Skyforge Citadel theme
- Smooth animations and transitions

### Color Palette
- Background: `#0C0D12`
- Primary: `#3FE0D0`
- Secondary: `#9F6CFF`
- Gold: `#FFD66B`

## 🔒 Security

### Security Considerations
- Never commit sensitive data
- Validate all user inputs
- Use parameterized queries
- Follow OWASP guidelines

### Reporting Security Issues
- Email security issues privately
- Do not create public issues for vulnerabilities
- Allow time for fixes before disclosure

## 📝 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🤝 Community

### Communication
- Be respectful and inclusive
- Help others learn and grow
- Share knowledge and best practices
- Follow the code of conduct

### Getting Help
- Check existing documentation
- Search closed issues
- Ask in discussions
- Join our Discord server

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Special contributor badges
- Annual contributor highlights

Thank you for helping make RuneFlip better! 🪙✨
