# CryptoSouq - B2B Cryptocurrency Platform for Moroccan Businesses

CryptoSouq is a comprehensive B2B cryptocurrency platform designed specifically for Moroccan businesses, banks, and financial institutions. The platform provides enterprise-grade cryptocurrency solutions including institutional custody, treasury management, tokenization, NFT creation, and dApp development.

## Table of Contents

- [Features](#features)
- [Technical Stack](#technical-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Blockchain Integration](#blockchain-integration)
- [Security](#security)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

### Authentication & Onboarding
- Secure login with email/password or Web3 wallet
- Multi-step business registration and KYC
- Role-based access control
![image](https://github.com/user-attachments/assets/f919975c-f823-4e08-9fbe-67bf1d5744a8)

### Dashboard
- Enterprise overview with key metrics
- Quick actions panel
- Live market data
![image](https://github.com/user-attachments/assets/e8e089fe-a257-4470-8819-7d511e4ea744)


### Institutional Crypto Custody
- Cold & hot wallet management
- Multi-signature configuration
- Transaction monitoring
- Security alerts
![image](https://github.com/user-attachments/assets/4030c14b-8c56-46fa-8c7f-9336fe504774)

![image](https://github.com/user-attachments/assets/e0e648c0-9a99-44ef-85bc-aed65f946482)

### Treasury & Yield Optimization
- Stablecoin management
- Automated staking & DeFi strategies
- Asset allocation visualization
- Yield farming opportunities
![image](https://github.com/user-attachments/assets/39cb9206-9ad9-4711-8edb-a9a0f3ca7608)


### Cross-Border Crypto Payments
- International crypto transfers
- Stablecoin remittances
- Exchange rate monitoring
![image](https://github.com/user-attachments/assets/8cc27887-8b74-4f2a-983e-e9ed4a9ffeb0)


### Compliance & Security
- KYC & AML dashboard
- On-chain transaction monitoring
- Risk assessment tools
![image](https://github.com/user-attachments/assets/09b640c5-a994-417e-8c5d-19a47c85b0d7)

### Tokenization
- ERC-20/BEP-20 token creation
- Token management dashboard
- Custom token features (mintable, burnable, pausable)
![image](https://github.com/user-attachments/assets/bbf99848-a3de-436e-ad67-172469811d80)

![image](https://github.com/user-attachments/assets/6cea4021-a104-46ef-888e-bc4a63af0741)

### NFT Management
- NFT creation with metadata support
- Collection management
- Marketplace integration
- Multiple file format support (images, videos, 3D models)
![image](https://github.com/user-attachments/assets/a8cf83a8-60ec-4ea9-ac4a-4de791cec056)

### dApp Development
- Template-based dApp creation
- Smart contract deployment
- Frontend generation
- Analytics dashboard
![image](https://github.com/user-attachments/assets/8e59c883-0380-4093-8e81-c009796f0555)

## Technical Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **UI Components**: shadcn/ui (built on Radix UI)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Forms**: React Hook Form with Zod validation

### Backend
- **Runtime**: Node.js
- **API**: Next.js API Routes
- **Database ORM**: Prisma
- **Authentication**: JWT with bcrypt for password hashing
- **File Storage**: IPFS via Infura

### Blockchain
- **Ethereum Library**: ethers.js
- **Smart Contracts**: Solidity
- **Contract Standards**: ERC-20, ERC-721, ERC-1155
- **Development Tools**: Hardhat

### Database
- **Primary Database**: PostgreSQL
- **Schema**: Prisma schema with relations

### DevOps
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions
- **Environment Management**: dotenv

## Architecture

CryptoSouq follows a modern full-stack architecture:

1. **Client Layer**: Next.js React components with server and client components
2. **API Layer**: Next.js API routes for backend functionality
3. **Service Layer**: Business logic for authentication, blockchain interactions, etc.
4. **Data Layer**: Prisma ORM for database operations
5. **Blockchain Layer**: Smart contract interactions via ethers.js
6. **Storage Layer**: IPFS for decentralized file storage

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- Ethereum wallet with testnet funds
- IPFS account (Infura or Pinata)

### Installation
Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```
   git clone https://github.com/saadbenchekroun/crypto-souq.git
   cd crypto-souq
   ```

2. **Install dependencies:**
   ```
   pnpm install
   ```

3. **Configure environment variables:**
   ```
   cp .env.example .env.local
   ```
   Then open `.env.local` and update the values as needed.

4. **Set up the database:**
   ```
   npx prisma migrate dev
   ```

5. **Start the development server:**
   ```bash
   pnpm dev
   ```

6. **Open your browser:**

   Visit [http://localhost:3000](http://localhost:3000)


## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `JWT_SECRET` | Secret for JWT token generation | Yes |
| `RPC_URL` | Ethereum RPC URL (Infura, Alchemy, etc.) | Yes |
| `PRIVATE_KEY` | Ethereum wallet private key for contract deployment | Yes |
| `IPFS_PROJECT_ID` | Infura IPFS project ID | Yes |
| `IPFS_PROJECT_SECRET` | Infura IPFS project secret | Yes |
| `NODE_ENV` | Environment (development, production) | Yes |

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Tokens
- `GET /api/tokens` - Get all tokens for a user
- `POST /api/tokens` - Create a new token
- `GET /api/tokens/:id` - Get token details
- `DELETE /api/tokens/:id` - Delete a token

### NFTs
- `GET /api/nfts` - Get all NFTs for a user
- `POST /api/nfts` - Create a new NFT
- `GET /api/nfts/:id` - Get NFT details
- `DELETE /api/nfts/:id` - Delete an NFT

### dApps
- `GET /api/dapps` - Get all dApps for a user
- `POST /api/dapps` - Create a new dApp
- `GET /api/dapps/:id` - Get dApp details
- `GET /api/dapps/:id/analytics` - Get dApp analytics
- `PUT /api/dapps/:id/analytics` - Update dApp analytics

## Blockchain Integration

### Supported Networks
- Ethereum Mainnet
- Polygon
- BNB Chain
- Solana
- Tezos

### Smart Contract Templates
- ERC-20 Token
- ERC-721 NFT
- ERC-1155 Multi-token
- Custom DeFi contracts
- DAO governance contracts

### Wallet Integration
- MetaMask
- WalletConnect
- Ledger Hardware Wallet

## Security

CryptoSouq implements several security measures:

- **Authentication**: JWT with secure HTTP-only cookies
- **Password Security**: bcrypt hashing
- **API Protection**: Middleware authentication checks
- **Smart Contract Security**: OpenZeppelin standards
- **Multi-signature Wallets**: For institutional custody
- **Input Validation**: Zod schema validation
- **CORS Protection**: Restricted API access

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy with the following settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Database Setup

1. Create a PostgreSQL database
2. Run migrations:
   \`\`\`bash
   npx prisma migrate deploy
   \`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for Moroccan businesses entering the blockchain ecosystem.
