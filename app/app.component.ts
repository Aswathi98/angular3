import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  data = {};
  isLoading = false;
  constructor(private http: HttpClient) {

  }
  loadData() {
    this.isLoading = true;
    this.http.get("http://localhost:8081/show")
      .pipe(
        delay(1)
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.isLoading = false;
          this.data = res;
        },
        (err) => {
          this.isLoading = false;
          alert("Error Occured");
        }
      );
  }
}

