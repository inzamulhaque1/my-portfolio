import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-[#FF014F] border-t-transparent rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white mt-4 font-exo-2"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-300 dark:bg-gray-600" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3" />
        <div className="flex gap-2">
          <div className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded-full" />
          <div className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
