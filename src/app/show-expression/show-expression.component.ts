import { Component, OnInit } from '@angular/core';

declare function lex(input: any): any;
declare function parse(input: any): any;
declare function evaluate(input: any): any;
declare function calculate(input: any): any;

@Component({
  selector: 'app-show-expression',
  templateUrl: './show-expression.component.html',
  styleUrls: ['./show-expression.component.css']
})
export class ShowExpressionComponent implements OnInit {

  tokens: any = '';

  constructor() { }

  //var tokens;

  ngOnInit() {
    let tokens = lex('3+4+5/12+(3+4)*6');
    this.tokens = JSON.stringify(tokens, null, 4);
    console.log(tokens);

    let tree = parse(tokens);
    console.log(tree);

    let result = evaluate(tree);
    console.log(result);

  }

}
