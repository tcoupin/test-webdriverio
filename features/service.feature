Feature: root at wxs
	Scenario: get 200 at root
		Given a request at "http://wxs.ign.fr"
		When I send the request
		Then the responce code must be 200
	Scenario: get 403 at root
		Given a request at "http://wxs-i.ign.fr"
		When I send the request
		Then the responce code must be 403