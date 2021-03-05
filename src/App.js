import Axios from 'axios';
import React from 'react';


const gambar = [
  {judul: "Layanan Kiloan", kategory: "kiloan", image: "/img/ngisorport/kilo.png"},
  {judul: "Layanan Ekspress", kategory: "ekspress", image: "/img/ngisorport/ekpres.png"},
  {judul: "Layanan Setrika", kategory: "setrika", image: "/img/ngisorport/setriko.png"}
]

const App = () => {
const [nama, setNama] = React.useState([]); 
const [wishlist, setWishlist] = React.useState(0);

React.useEffect(() =>{
    Axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setNama(res.data)
    }).catch((err) => {
      console.log(err)
    });
  }, []);
return(
  <>
   
   <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="#">Antar Jemput Laundry</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-right mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Beranda <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Promo</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* akhir navbar */}
        {/* jumbotron */}
        <div className="jumbotron text-center">
          <div className="container">
            <div className="h">
              <h1><p>Selamat Datang</p></h1>
              <h3><p>Antar Jemput Laundry</p></h3>
            </div>
          </div>
        </div>
        {/* akhir jumbotron */}
        {/* tentang */}
        <section className="about" id="about">
          <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <h2 className="text-center">Layanan Laundry</h2>
                <hr />
              </div>
            </div>
            <div className="row">
              
              <div className="col-sm-6 offset-sm-1">
                <h1>Layanan</h1>
                <p>Kami disini siap dan bersedia melayani dan memenuhi kebutuhan anda,
                  dengan layanan-layanan yang menjamin kepuasan anda. 
                  Kami akan melayani sebagaimana layanan yang ada di gambar samping.
                </p>
                <p>Kami melayani Laundry dari mulai Satuan Kiloan Bahkan sampai Laundry karpet</p>
              </div>
              <div className="col-sm-4 offset-sm-1 text-center">
                <img src="img/ber.png" alt="" />
              </div>
            </div>
            <h4><br /></h4>
          </div>
        </section> 
        {/* akhir tentang */}
        {/* layanan */}
        <section className="Layanan" id="Layanan">
          <div className="container">
            <h6><br /></h6>
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2>Layanan Terbaik</h2>
                <h6>Memenuhi kebutuhan anda</h6>
                <hr />  
                {/* <div className="contaimer"> */}
                  
                {/* </div> */}
              </div>
            </div>
          </div>
          
          <div className="container">
            <div className="layanan text-center">
              <h4 style={{ textAlign: 'left'}}>pilih menu jasa: {wishlist}</h4>
              <div className="row">
                    {nama == '' ? (<div>Nteni sediluk...</div>): nama.slice(0,3).map((item, index) => {
                    return (
                      <>
                      {/* <div onClick={()=> setWishlist(wishlist+1)} > */}
                        <div className="col-sm-4">
                        <div  className="konten-1">
                          <h5>{gambar[index].judul}</h5>
                          <a href="#">
                            <img src={gambar[index].image} className="img-thumbnail" />
                          </a>
                          <h6>{gambar[index].kategory}</h6>
                          <button onClick={()=> setWishlist(wishlist+1)} >Pesan</button>
                          <h4><br /></h4>
                        </div>
                        </div>
                      </>
                    )
                  })}
                
              </div>
            </div>
          </div>
        </section>
        {/* akhir layanan */}
        {/* contact */}
        <section className="contact " id="contact">
          <h1><br /></h1>
          <div className="container">
            <div className="coba">
              <h4><br /></h4>
              <div className="row">
                <div className="col-sm-5 text-center">
                  <h1>Dapatkan Layanan</h1>
                  <br />
                  <h5>Pasirsari, Pekalongan Barat</h5>
                  <br />
                  <h6>0896-6987-8339</h6>
                </div>
                <div className="col-sm-6 offset-sm-">
                  <form>
                    <div className="form-group">
                      <label htmlFor="nama">Nama</label>
                      <input type="text" id="nama" className="form-control" placeholder="masukkan nama" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" className="form-control" placeholder="masukkan email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telp">No telepone</label>
                      <input type="tel" id="telp" className="form-control" placeholder="masukkan no telepone" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pesan">Pesan</label>
                      <textarea className="form-control" rows={10} placeholder="masukkan pesan" defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-primary">Kirim</button>
                  </form>
                  <h5><br /></h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* akhir contact */}
        {/* footer */}
        <footer>
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-12">
                <p> © copyright 2021 | built by. <a href="http://instagram.com/rifqishodiq">Shodikur</a>.</p>
              </div>
            </div>
            {/* <div class="row">
          <div class="col-sm-12">
            <a href="http://instagram.com/rifqishodiq" class="btn btn-danger"><i class="Camera fill"></i>follow my Instagram</a>
          </div>
        </div> */}
          </div>
        </footer>
  </>
  );
};




export default App;
