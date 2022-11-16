export class Auth  {
    constructor(
        public username?: string,
        public password?: string,
        public errCode?: string,
        public errDesc?: string,
        public token?: string,
    ) {
    }
}
