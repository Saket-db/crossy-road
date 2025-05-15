export function calFinPos(currentPosition, moves) {
    return moves.reduce((pos, direction) => {
        if (direction === "forward") {
            return {
                rowIndex: pos.rowIndex + 1,
                tileIndex: pos.tileIndex,
            };
        }

        if (direction === "backward") {
            return {
                rowIndex: pos.rowIndex - 1,
                tileIndex: pos.tileIndex,
            };
        }

        if (direction === "left") {
            return {
                rowIndex: pos.rowIndex,
                tileIndex: pos.tileIndex - 1,
            };
        }

        if (direction === "right") {
            return {
                rowIndex: pos.rowIndex,
                tileIndex: pos.tileIndex + 1,
            };
        }

        console.log("Invalid direction:", direction);
        return pos;
    }, currentPosition);
}
