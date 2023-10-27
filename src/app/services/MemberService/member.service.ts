import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {authApi} from "../../utils/api/auth/auth";
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {memberApi} from "../../utils/api/member/member";
import {GetLoginSuccess} from "../../store/actions/userAction/user.action";
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

  async addMember(
  user_id: number,
  name: string,
  email: string,
  phone_number: string,
  address: string,
  date_of_birth: any,
  gender: string,
  emergency_contact_name: string,
  photo_id: any,
  membership_type: string,
  payment_information: string
  ): Promise<any> {
    const data = {
      "user_id": user_id,
      "name": name,
      "email": email,
      "phone_number": phone_number,
      "address": address,
      "date_of_birth": date_of_birth,
      "gender": gender,
      "emergency_contact_name": emergency_contact_name,
      "photo_id": photo_id,
      "membership_type": membership_type,
      "payment_information": payment_information
    };

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
      const response: any = await this.http.post(this.getMemberListUrl, data).toPromise();
      const action = FetchMemberSuccess({ member: response });
      this.store.dispatch(action);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
