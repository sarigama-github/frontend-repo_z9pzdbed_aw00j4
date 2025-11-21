import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Gauge, BarChart3, MapPin, Handshake, Headphones, MessageSquare, Server, Truck, Rocket, Coins, ArrowLeftRight, FileText, LineChart, Cpu } from 'lucide-react'

const gold = 'from-yellow-400 to-yellow-300'
const blue = 'from-blue-500 to-sky-400'

const items = [
  { title: 'ASIC hardware', Icon: Cpu, desc: 'Purpose-built miners, modeled and tracked', grad: blue },
  { title: '24/7 monitoring', Icon: Gauge, desc: 'Live uptime and thermal sensing', grad: blue },
  { title: 'Instant hosting', Icon: Server, desc: 'Provisioning with a single request', grad: blue },
  { title: 'Secure assets', Icon: Shield, desc: 'Custody controls and audit trails', grad: gold },
  { title: 'Fast brokerage', Icon: ArrowLeftRight, desc: 'Buy/sell instantly with routing', grad: gold },
  { title: 'Seamless logistics', Icon: Truck, desc: 'Ship, rack, and route efficiently', grad: blue },
  { title: 'Dedicated support', Icon: Headphones, desc: 'Direct access to specialists', grad: blue },
  { title: 'Profitable contracts', Icon: FileText, desc: 'Terms optimized for yield', grad: gold },
  { title: 'Dashboard analytics', Icon: BarChart3, desc: 'Performance KPIs and trends', grad: blue },
  { title: 'U.S. operations', Icon: MapPin, desc: 'Domestic sites and compliance', grad: blue },
  { title: 'Institutional trust', Icon: Handshake, desc: 'Controls and SLAs for scale', grad: gold },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.5 }})
}

const IconCard = ({ Icon, title, desc, grad, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ y: -4 }}
    className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md overflow-hidden"
  >
    <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${grad} opacity-20 blur-2xl`} />
    <div className="flex items-center gap-3">
      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${grad} text-slate-900 shadow-[0_10px_30px_rgba(59,130,246,0.25)]`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-white font-medium leading-tight">{title}</h3>
        <p className="text-blue-100/80 text-sm">{desc}</p>
      </div>
    </div>
  </motion.div>
)

const IconGrid = () => {
  return (
    <section id="features" className="relative py-14 md:py-18 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Capabilities that compound performance</h2>
          <p className="text-blue-100/80 mt-2">Animated, lightweight icons aligned to a gold/blue/white fintech palette.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => (
            <IconCard key={item.title} index={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default IconGrid
