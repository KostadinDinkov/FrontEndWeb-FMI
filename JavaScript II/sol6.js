var tableFrame = '<!DOCTYPE html>\
    <html>\
    <head>\
        <title>Table</title>\
    </head>\
    <body>\
        <table border="1">\
            <caption>Table caption</caption>\
            <tr>\
                <th>Evidence Rating</th>\
                <th>Effect</th>\
                <th>Efficacy</th>\
                <th>Consensus</th>\
                <th>Comments</th>\
            </tr>\
            <tr id="line1">\
            </tr>\
            <tr id="line2">\
            </tr>\
        </table>\
        <button onClick="reverseLines()">Switch place of 1st and 2nd lines</button>\
    </body>\
    </html>'

var line1 = '<td>A</td>\
            <td>Power Output</td>\
            <td>3 Stars</td>\
            <td>80% 18 studies</td>\
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A architecto blanditiis cumque doloribus, eius enim est exercitationem harum itaque iure iusto magni nam nobis? Alias  aspenatur deleniti deserunt ea veniam!</td>'

var line2 = '<td>B</td>\
            <td>Weight</td>\
            <td>4 Stars</td>\
            <td>100% 65 studies</td>\
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab ad corporis cumque, dignissimos eaque excepturi fuga in ipsa laudantium mollitia obcaecati</td>'


function create() {
    document.documentElement.innerHTML = tableFrame;
    document.getElementById("line1").innerHTML = line1;
    document.getElementById("line2").innerHTML = line2;
};

function reverseLines() {
    document.getElementById("line1").innerHTML = line2;
    document.getElementById("line2").innerHTML = line1;
}

create();
