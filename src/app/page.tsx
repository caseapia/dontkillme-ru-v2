import Header from '../components/Header';
import Area from './pageArea';
import Footer from '../components/Footer';
import './css/page.scss'

export default function Main() {
    return (
        <div id="root">
            <Header />
            <Area />
            <Footer />
        </div>
    )
}