class Line {
    draw(x, y, toX, toY, r, ctx) {
      const moveToX = x;
      const moveToY = y + r;
      const lineToX = toX;
      const lineToY = toY - r;
      ctx.beginPath();
      ctx.moveTo(moveToX, moveToY)
      const cx = lineToX;
      const cy = moveToY;
      ctx.quadraticCurveTo(cx, cy, lineToX, lineToY)
      ctx.stroke();
    }
  }

  // Simple Line Version

  // ctx.moveTo(moveToX, moveToY);
  // ctx.lineTo(lineToX, lineToY)