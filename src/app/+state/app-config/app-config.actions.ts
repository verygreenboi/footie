export class SetTitle {
  public static readonly type = '[AppConfig] SetTitle';
  constructor(public title: string) { }
}

export class SetUser {
  public static readonly type = '[APP] Set User';
  constructor(public email: string) {
  }
}

export class Login {
  public static readonly type = '[APP] Login';
  constructor(public email: string) {
  }
}

export class Logout {
  public static readonly type = '[APP] Logout';
}
