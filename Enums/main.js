// eita basically akta list kind of . just key gula diye acces kora jai oi value take 
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["East"] = "East";
    Direction["South"] = "South";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
;
console.log(Direction.East);
