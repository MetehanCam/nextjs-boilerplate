import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Leaf, Phone, Mail, Target, DollarSign, Users } from "lucide-react"
import Link from "next/link"

export default function AnaSayfa() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    switch(activePage) {
      case 'about':
        return <HakkimizdaPage />
      case 'mission':
        return <MisyonumuzPage />
      case 'career':
        return <KariyerPage />
      case 'contact':
        return <IletisimPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-green-600 text-white">
        <Link className="flex items-center justify-center" href="#" onClick={() => setActivePage('home')}>
          <Leaf className="h-6 w-6 mr-2" />
          <span className="font-bold text-xl">Evo Garden Emlak</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" className="text-white hover:text-green-200" onClick={() => setActivePage('about')}>
            Hakkımızda
          </Button>
          <Button variant="ghost" className="text-white hover:text-green-200" onClick={() => setActivePage('mission')}>
            Misyonumuz
          </Button>
          <Button variant="ghost" className="text-white hover:text-green-200" onClick={() => setActivePage('career')}>
            Kariyer
          </Button>
          <Button variant="ghost" className="text-white hover:text-green-200" onClick={() => setActivePage('contact')}>
            İletişim
          </Button>
        </nav>
      </header>
      <main className="flex-1 bg-gradient-to-b from-green-50 to-white">
        {renderPage()}
      </main>
      <footer className="bg-green-600 text-white py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 Evo Garden Emlak. 1987'den beri hizmetinizde. Tüm hakları saklıdır.
          </p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Gizlilik Politikası
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Kullanım Şartları
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Evo Garden ile Emlak Dünyasında Yeni Bir Sayfa Açın</h1>
        <p className="text-xl text-gray-600 mb-8">1987'den beri güveninizle, şimdi yenilikçi yaklaşımımızla hizmetinizdeyiz.</p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
          Hemen Başlayın
        </Button>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700">
              <DollarSign className="w-6 h-6 mr-2" />
              Ofis Giderlerine Son!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Evo Garden'da ofis giderleri yok. Ofis sahiplerine ödenen komisyonlar tarihe karışıyor. Tüm kazanç siz değerli emlak danışmanlarımıza kalıyor!
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700">
              <Users className="w-6 h-6 mr-2" />
              Danışman Odaklı Yaklaşım
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Modern emlak sektöründe başarının anahtarı: Güçlü danışmanlar. Evo Garden olarak, sizin başarınız için her türlü desteği sunuyoruz.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Neden Evo Garden?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Yeşil bir geleceğe, sürdürülebilir emlak anlayışıyla birlikte adım atın. Evo Garden, doğa dostu yaşam alanları ve çevreci emlak yaklaşımıyla sektörde fark yaratıyor.
        </p>
        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
          Daha Fazla Bilgi
        </Button>
      </section>
    </div>
  )
}

function HakkimizdaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Hakkımızda</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">1987'den Beri Güveninizle</h2>
          <p className="text-gray-600 mb-4">
            Evo Garden Emlak olarak, 35 yılı aşkın süredir emlak sektöründe öncü ve güvenilir bir isim olmaktan gurur duyuyoruz. Kurulduğumuz günden bu yana, müşterilerimizin hayallerindeki eve kavuşmalarına yardımcı oluyoruz.
          </p>
          <p className="text-gray-600">
            Yılların deneyimi ve modern yaklaşımımızla, emlak sektörüne yeni bir soluk getiriyoruz. Ofissiz çalışma modelimiz ve danışman odaklı yaklaşımımızla, sektörde devrim yaratıyoruz.
          </p>
        </div>
        <div className="flex justify-center">
          <Building2 className="w-64 h-64 text-green-600" />
        </div>
      </div>
    </div>
  )
}

function MisyonumuzPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Misyonumuz</h1>
      <Card className="max-w-2xl mx-auto bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center text-green-700">
            <Target className="w-6 h-6 mr-2" />
            Sürdürülebilir Emlak, Mutlu Danışmanlar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Misyonumuz, emlak sektörünü daha yeşil, daha sürdürülebilir ve danışmanlar için daha kazançlı hale getirmektir. Ofis giderlerini ortadan kaldırarak, danışmanlarımızın kazançlarını maksimize ediyoruz.
          </p>
          <p className="text-gray-600 mb-4">
            Aynı zamanda, çevre dostu yaşam alanları ve yeşil bina projeleriyle, doğaya saygılı bir emlak anlayışını teşvik ediyoruz. Müşterilerimize sadece ev değil, yaşam kalitesi sunuyoruz.
          </p>
          <p className="text-gray-600">
            Evo Garden olarak, emlak sektöründe yenilikçi ve sürdürülebilir bir geleceğin öncüsü olmayı hedefliyoruz.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function KariyerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Kariyer Fırsatları</h1>
      <div className="max-w-md mx-auto">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-700">Emlak Danışmanı Olun</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input id="name" placeholder="Adınız ve soyadınız" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" placeholder="E-posta adresiniz" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" placeholder="Telefon numaranız" required type="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Deneyim</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="experience"
                  placeholder="Emlak sektöründeki deneyiminizi kısaca anlatın"
                  required
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white" type="submit">
                Başvuru Yap
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function IletisimPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Bize Ulaşın</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center text-green-700">
              <Phone className="w-6 h-6 mr-2" />
              Telefon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-600">+90 (212) 555 55 55</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center text-green-700">
              <Mail className="w-6 h-6 mr-2" />
              E-posta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-600">iletisim@evogarden.com</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
