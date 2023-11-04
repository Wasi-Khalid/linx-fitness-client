import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {memberApi} from "../../utils/api/member/member";
import {FetchMemberListSuccess, FetchMemberSuccess} from "../../store/actions/memberAction/member.action";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  addMemberUrl = environment.baseUrl + memberApi.addMember;
  getMemberListUrl = environment.baseUrl + memberApi.getMemberByUserId;
  getMemberUrl = environment.baseUrl + memberApi.getMemberById;

  constructor(
    private http: HttpClient,
    private store: Store,
  ) {}

  async addMember(data: FormData): Promise<any> {
    try {
      return await this.http.post(this.addMemberUrl, data).toPromise();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getMemberList(id: number): Promise<any> {
    const data = {
      "user_id": id,
    };

    try {
      const response: any = await this.http.post(this.getMemberListUrl, data).toPromise();
      const action = FetchMemberListSuccess({ member: response });
      this.store.dispatch(action);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getMemberById(user_id: number, member_id: number): Promise<any> {
    const data = {
      "user_id": user_id,
      "member_id": member_id
    };

    try {
      const response: any = await this.http.post(this.getMemberUrl, data).toPromise();
      const action = FetchMemberSuccess({ member: response });
      this.store.dispatch(action);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
