import { Headers} from "@angular/http";

export const appConfig = {
    apiUrl: "http://3amigosa.azurewebsites.net/as/api/",
    header: new Headers({'Content-Type': 'application/json'})
}
