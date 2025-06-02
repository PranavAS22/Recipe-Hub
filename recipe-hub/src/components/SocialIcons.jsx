import instagramIcon from '../assets/instagram.png'
import facebookIcon from '../assets/facebook.png'
import twitterIcon from '../assets/twitter.png'
import pinterestIcon from '../assets/pinterest.png'

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com', icon: instagramIcon },
  { name: 'Facebook', url: 'https://facebook.com', icon: facebookIcon },
  { name: 'Twitter', url: 'https://twitter.com', icon: twitterIcon },
  { name: 'Pinterest', url: 'https://pinterest.com', icon: pinterestIcon },
]

export default function SocialIcons() {
  return (
    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
          aria-label={link.name}
        >
          <img
            src={link.icon}
            alt={link.name}
            width={32}
            height={32}
            draggable="false"
            style={{ display: 'block' }}
          />
        </a>
      ))}
    </div>
  )
}
