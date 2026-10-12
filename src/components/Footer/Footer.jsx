import { Pizza, Instagram, Facebook, Music2, Youtube } from 'lucide-react';
import './Footer.css';
const photos=[{src:'logo.jpg',alt:'logo equina 4'}]

const links=[['Inicio','#inicio'],['Nosotros','#nosotros'],['Sucursales','#sucursales'],['Redes','#redes'],['Contacto','#contacto']];
export default function Footer(){return <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><img src="/images/logo.png" alt="Logo de Pizzería Libre" /></span><span>PIZZERÍA LIBRE<small>ESQUINA 4</small></span></a><nav className="footer-nav">{links.map(([name,url])=><a href={url} key={url}>{name}</a>)}</nav><div className="footer-social"><a href="https://instagram.com" aria-label="Instagram"><Instagram/></a><a href="https://facebook.com" aria-label="Facebook"><Facebook/></a><a href="https://tiktok.com" aria-label="TikTok"><Music2/></a><a href="https://youtube.com" aria-label="YouTube"><Youtube/></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Pizzería Libre Esquina 4. Todos los derechos reservados.</span><span>Hecho por PlayTheGame</span></div></footer>}
