import { useState } from 'react';
import { motion } from 'framer-motion';

const GitHubStats = ({ username = 'inzamulhaque1' }) => {
  const [statsLoaded, setStatsLoaded] = useState(true);
  const [langsLoaded, setLangsLoaded] = useState(true);

  // Hide component entirely if both fail
  if (!statsLoaded && !langsLoaded) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8"
    >
      {/* GitHub Stats Card */}
      {statsLoaded && (
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=1a1a2e&title_color=FF014F&icon_color=FF014F&text_color=ffffff`}
          alt={`${username}'s GitHub Stats`}
          className="max-w-full h-auto rounded-xl shadow-lg"
          loading="lazy"
          onError={() => setStatsLoaded(false)}
        />
      )}

      {/* Top Languages Card */}
      {langsLoaded && (
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=1a1a2e&title_color=FF014F&text_color=ffffff`}
          alt={`${username}'s Top Languages`}
          className="max-w-full h-auto rounded-xl shadow-lg"
          loading="lazy"
          onError={() => setLangsLoaded(false)}
        />
      )}
    </motion.div>
  );
};

export default GitHubStats;
