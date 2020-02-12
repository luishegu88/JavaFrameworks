import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  private albumApiUrl: string = "http://localhost:8080/api/v1/album";
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.albumApiUrl);
  }

  getalbumById(albumId){
    return this.http.get(this.albumApiUrl + "/" + albumId);
  }

  createAlbum(album){
    let header = {
      "headers": {
        "Content-Type": "application/json"
      }
    }
    return this.http.post(this.albumApiUrl, JSON.stringify(album), header);
  }

  deleteAlbum(albumId){
    return this.http.delete(this.albumApiUrl + "/" + albumId);
  }

}
