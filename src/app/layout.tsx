import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/main/general.scss';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Dontkillme.ru</title>
                <meta property="og:title" content="Dontkillme.ru" key="title" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}