var batch_helloworld = {};
batch_helloworld.name = "こんにちわ世界";
batch_helloworld.outOfLogin = true;// 必須、falseになるとログインチェックを行うからエラーになる
batch_helloworld.paramsFormat = {};//
batch_helloworld.fire = function(params) {
	// これは直接SQLを実行するサンプルです。
	return "sql test: user count="
			+ (new Select("select count(*) as cnt from 個人情報")).getValue("cnt");
};
