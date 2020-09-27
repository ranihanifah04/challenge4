import React, {Component} from "react";  
	import $ from "jquery";
	class daftar extends Component {  
	  constructor(){  
        super();  
        	  this.state = {  
        	    Belanja : [  
        	      {id: "100", nama: "Kentang", jumlah: "100"},  
        	      {id: "101", nama: "Wortel", jumlah: "100"},  
        	      {id: "102", nama: "Sawi", jumlah: "100"},  
        	    ],  
        	    nis: "",  
        	    nama: "",  
        	    alamat: "",
        	    action: "" 
        	  }  
	  
		}
		
			    bind = (event) => {  
			    this.setState({[event.target.name]: event.target.value});  
			     /* fungsi ini digunakan untuk memasukkan data dari elemen input 
			      ke variable state. 
				  contoh ketika input nis diisi, maka secara otomatis variabel nis 
		     	  pada state bernilai sesuai dengan inputan 
				  */  
				}  
				  
				SaveBelanja = (event) =>{  
				    event.preventDefault();  
				  // temp digunakan untuk menyimpan sementara  
				  // data array siswa  
				    let temp = this.state.Belanja;  
				  
				    if (this.state.action === "insert") {  
				  // temp akan ditambahkan dengan data siswa yang baru  
			      // sesuai dengan data yang dimasukkan pada form  
				    temp.push({  

				    nis: this.state.id,  
						nama: this.state.nama,  
						alamat: this.state.jumlah  
					 });  
						} else if (this.state.action === "update") {  
					// mencari index data yang akan diubah  
						let index = temp.findIndex(item => item.id === this.state.id);  
					// mengubah data array sesuai dengan masukan pada form  
						temp[index].nama = this.state.nama;  
						temp[index].jumlah = this.state.jumlah;  
					}  
							  
							  
					// array siswa diupdate dengan nilai data temp  
						this.setState({Belanja: temp});  
							  
					// menutup modal  
					    $("#modal").modal('hide');  
					}  
							  
					    Add = () => {  
						// mengosongkan nilai nis, nama, dan alamat  
					    // pada saat tombol add ditekan  
							this.setState({  
							    id: "",  
							    nama: "",  
							    jumlah: "",  
							    action: "insert"  
							  });  
							}  
							  
					    Edit = (item) => {  
							  this.setState({  
							    id: item.nis,  
							    nama: item.nama,  
							    jumlah: item.jumlah,  
							    action: "update"  
							  });  
							}  
							  
						Drop = (index) => {  
							  // temp digunakan untuk menyimpan sementara  
							  // data array siswa  
							  let temp = this.state.Belanja;  
							  
							  // menghapus data pada index yang dihapus  
							  temp.splice(index,1);  
							  
							  // array siswa diupdate dengan nilai data temp  
							  this.setState({Belanja: temp});  
							}  
			



	  render(){  
	    return (  
            <div className="container">  
            	        { /* generate list */ }  
            	        <ul className="list-group">  
            	          {this.state.Belanja.map((item,index) => {  
            	            return (  
            	              <li className="list-group-item" key={index}>  
            	                <h5 className="text-info">{item.nama}</h5>  
            	                <h6>Id: {item.id}</h6>  
            	                <h6>jumlah: {item.jumlah}</h6>  
            	  
            	                <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
            	                data-toggle="modal" data-target="#modal">  
            	                  Edit  
            	                </button>  
            	                <button className="btn btn-sm btn-info m-1" onClick={() => this.Drop(index)}>  
        	                  Hapus  
            	                </button>  
            	              </li>  
            	            );  
            	          })}  
            	        </ul>  
            	        <button className="btn btn-sm btn-danger m-3" onClick={this.Add}  
            	        data-toggle="modal" data-target="#modal">  
            	          Tambah Data  
            	        </button>  
            	  
            	        { /* elemen form modal */ }  
            	        <div className="modal fade" id="modal">  
            	          <div className="modal-dialog">  
            	            <div className="modal-content">  
            	              <div className="modal-header bg-success text-white">  
            	                <h5>Form Siswa</h5>  
            	              </div>  
            	              <form onSubmit={this.SaveSiswa}>  
            	              <div className="modal-body">  
            	                Id 
            	                <input type="text" name="nis" className="form-control" onChange={this.bind}  
            	                value={this.state.id} />  
            	                Nama 
            	                <input type="text" name="nama" className="form-control" onChange={this.bind}  
            	                value={this.state.nama} /> 
                                jumlah 
                                <input type="text" name="nama" className="form-control" onChange={this.bind}  
            	                value={this.state.item} /> 
            	              </div>  
            	              <div className="modal-footer">  
            	                <button type="submit" className="btn btn-primary">  
            	                  Simpan  
            	                </button>  
            	              </div>  
                              </form>  
            </div>  
	          </div>  
	        </div>  
	      </div>  
	    );  
	  }  
            
	      
	  
    } 
	export default daftar;