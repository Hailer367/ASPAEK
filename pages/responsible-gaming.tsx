// pages/responsible-gaming.tsx
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';

export default function ResponsibleGaming() {
  return (
    <Layout
      title="Responsible Gaming - RuneFlip"
      description="Responsible gaming information and resources"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-100/50 backdrop-blur-sm rounded-2xl border border-primary/20 p-8"
        >
          <h1 className="text-3xl font-bold font-rune bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
            Responsible Gaming
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Play Responsibly</h2>
              <p className="text-gray-300 mb-4">
                RuneFlip is designed to be an entertaining experience. Please remember that gambling should be fun, not a way to make money or solve financial problems.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Warning Signs</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Spending more than you can afford</li>
                <li>• Chasing losses with bigger bets</li>
                <li>• Gambling affecting relationships or work</li>
                <li>• Feeling anxious or depressed about gambling</li>
                <li>• Lying about gambling activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Safety Tools</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Set daily, weekly, and monthly limits</li>
                <li>• Take regular breaks from gaming</li>
                <li>• Never gamble when upset or under influence</li>
                <li>• Keep track of time and money spent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Get Help</h2>
              <p className="text-gray-300 mb-4">
                If you or someone you know has a gambling problem, help is available:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• National Problem Gambling Helpline: 1-800-522-4700</li>
                <li>• Gamblers Anonymous: www.gamblersanonymous.org</li>
                <li>• National Council on Problem Gambling: www.ncpgambling.org</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
