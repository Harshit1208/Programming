/**
 *@description:Stock Account using Linked list, Stack, Queue.
 *@since:09/06/2019
 *@author: Harshit Sethi
 */
const input = require('readline-sync')
const fs = require('fs')
const object = require('../stockAccount/stockAccountBl')

var ll = new object.LinkedList();
var stack = new object.Stack();
var queue = new object.Queue();

var data = fs.readFileSync('../stockAccount/Stocks.json')
var data1 = fs.readFileSync('../stockAccount/stackStocks.json')
var data2 = fs.readFileSync('../stockAccount/queueStocks.json')

var jsonObjectdata = JSON.parse(data)
var jsonObjectdata1 = JSON.parse(data1)
var jsonObjectdata2 = JSON.parse(data2)

for (var i = 0; i < jsonObjectdata.length; i++) {
    ll.add(jsonObjectdata[i]);
}
for (var i = 0; i < jsonObjectdata1.length; i++) {
    stack.push(jsonObjectdata1[i]);
}
for (var i = 0; i < jsonObjectdata2.length; i++) {
    queue.enqueue(jsonObjectdata2[i]);
}

var currentStocks = input.questionInt("do you want to see the current stocks? press 1 if yes or any Key if no ");
if (currentStocks == 1) {
    if (jsonObjectdata.length == 0) {
        console.log("No Stocks available!")
    }
    else {
        var total = 0;
        for (var i = 0; i < jsonObjectdata.length; i++) {
            console.log("value of " + jsonObjectdata[i].nameOfStock + " shares is " + jsonObjectdata[i].numberOfShares * jsonObjectdata[i].priceOfShare + " Rs.")
            total = total + jsonObjectdata[i].numberOfShares * jsonObjectdata[i].priceOfShare;
        }
        console.log("Total value of all shares= " + total);
        console.log("----------------------------------")
    }
}
var run = true;
while (run) {
    var BSE = input.questionInt("enter 1 for buy, 2 for sell, any other key for exit. ")
    if (BSE == 1) {
        var number = input.questionInt("enter number of stocks you want to Buy= ")
        for (var i = 0; i < number; i++) {
            console.log("for " + (i + 1))
            var stockname = input.question("enter name of stock= ")
            var shares = input.questionInt("enter number of shares= ")
            var price = input.questionFloat("enter price for one share= ")
            var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
            var date = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();
            ll.add({
                "nameOfStock": stockname,
                "numberOfShares": shares,
                "priceOfShare": price
            });
            stack.push({
                "nameOfStock": stockname,
                "status": "Purchased"
            });
            queue.enqueue({
                "nameOfStock": stockname,
                "status": "Purchased",
                "time": time,
                "date": date
            });
        }
    }
    else if (BSE == 2) {
        var number = input.questionInt("enter number of stocks you want to sell= ")
        for (var i = 0; i < number; i++) {
            console.log("for " + (i + 1))
            var stocksell = input.question("enter name of stock you want to sell= ")
            var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
            var date = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();
            var llsize = ll.size_of_list();
            count = 0;
            for (var j = 0; j < llsize; j++) {
                var stockmatch = (ll.elementAtIndex(j)).nameOfStock;
                if (stocksell == stockmatch) {
                    break;
                }
                count++;
            }
            if (llsize == count) {
                console.log(stocksell + " stock is not present.")
            }
            else {
                var stocksold = (ll.elementAtIndex(count)).nameOfStock;
                ll.removeFrom(count);
                stack.push({
                    "nameOfStock": stocksold,
                    "status": "Sold"
                });
                queue.enqueue({
                    "nameOfStock": stocksold,
                    "status": "Sold",
                    "time": time,
                    "date": date
                });
            }
        }
    }
    else {
        llarray = [];
        stackarray = [];
        queuearray = [];

        for (var i = 0; i < ll.size_of_list(); i++) {
            llarray.push(ll.elementAtIndex(i))
        }
        while (!stack.isEmpty()) {
            stackarray.push(stack.pop());
        }
        while (!queue.isEmpty()) {
            queuearray.push(queue.dequeue());
        }

        fs.writeFileSync('../stockAccount/Stocks.json', JSON.stringify(llarray), 'utf-8');
        fs.writeFileSync('../stockAccount/stackStocks.json', JSON.stringify(stackarray), 'utf-8');
        fs.writeFileSync('../stockAccount/queueStocks.json', JSON.stringify(queuearray), 'utf-8');

        run = false;
    }
}

runagain = true;
while (runagain) {
    console.log('------------------------------');
    var ask = input.questionInt("Enter 1 if you want to see the stockReport, 2 if you want to see all transactions done, 3 for all transactions with time, any other key for exit= ");
    console.log('------------------------------');
    if (ask == 1) {
        var total1 = 0;
        var data11 = fs.readFileSync('../stockAccount/Stocks.json');
        var jsonObject11 = JSON.parse(data11);
        console.log("STOCK REPORT")
        for (var i = 0; i < jsonObject11.length; i++) {
            console.log("value of " + jsonObject11[i].nameOfStock + " shares is " + jsonObject11[i].numberOfShares * jsonObject11[i].priceOfShare + " Rs.")
            total1 = total1 + jsonObject11[i].numberOfShares * jsonObject11[i].priceOfShare;
        }
        console.log("Total value of all shares= " + total1);
    }
    else if (ask == 2) {
        var data22 = fs.readFileSync('../stockAccount/stackStocks.json');
        var jsonObject22 = JSON.parse(data22);
        console.log("ALL TRANSACTIONS")
        for (var i = 0; i < jsonObject22.length; i++) {
            console.log("Stock of " + jsonObject22[i].nameOfStock + " is " + jsonObject22[i].status);
        }
    }
    else if (ask == 3) {
        var data33 = fs.readFileSync('../stockAccount/queueStocks.json');
        var jsonObject33 = JSON.parse(data33);
        console.log("ALL TRANSACTIONS WITH TIME")
        for (var i = 0; i < jsonObject33.length; i++) {
            console.log("Stock of " + jsonObject33[i].nameOfStock + " is " + jsonObject33[i].status + " on " + jsonObject33[i].date + " at " + jsonObject33[i].time);
        }
    }
    else {
        runagain = false;
    }
}