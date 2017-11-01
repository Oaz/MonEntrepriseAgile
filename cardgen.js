/*
 * Copyright 2017 - Olivier Azeau
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */

function repeatByQuantity(items)
{
  return items.reduce(function(acc,item) {
    var qty = item.quantity ? item.quantity : 1;
    while(qty-->0)
      acc = acc.concat(item);
    return acc;
  }, []);
}

function render(items)
{
  for(var idx in items) {
    var item = items[idx];
    var output = item.tmpl.render(item);
    $("#cards-output").append(output);
  }
  $("#cards-output").append("<div class='sep'/><div class='page'><a href='https://creativecommons.org/licenses/by-sa/4.0/deed.fr'>CC-BY-SA 4.0</a> - <a href='https://monentrepriseagile.klo.re/'>https://monentrepriseagile.klo.re/</a></div><div class='sep'/>");
}

function generateCards(context, definition)
{
  if(definition.newpage) {
    render(context.remainder);
    context = undefined;
  }

  if(context == undefined)
    context = { remainder:[] };

  var tmplText = $("#card-definitions").contents().find("."+definition.family).prop('outerHTML');
  var tmpl = $.templates(tmplText);
  for(var idx in definition.items)
    definition.items[idx].tmpl = tmpl;

  var itemsToRender = repeatByQuantity(definition.items);
  itemsToRender = context.remainder.concat(itemsToRender);
  while(itemsToRender.length>definition.cardsByPage) {
    var itemSet = itemsToRender.slice(0,definition.cardsByPage);
    render(itemSet);
    itemsToRender = itemsToRender.slice(definition.cardsByPage);
  }

  return { remainder:itemsToRender };
}


$(document).ready(function() {
  $('#card-definitions').ready(function(){
    var context = undefined;
    for(var idx in cards)
      context = generateCards(context, cards[idx]);
    if(context.remainder)
      render(context.remainder);
  });
});


