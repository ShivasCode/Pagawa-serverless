import json
import boto3
import uuid

client = boto3.client('dynamodb')
dynamo = boto3.resource('dynamodb')
table_name = 'pagawa-database'

def handler(event, context):
    print(event)
    body = None
    status_code = 201
    headers = {
        'Content-Type': 'application/json'
    }
    
    try:
        # Parse the JSON body
        request_body = json.loads(event['body'])
        request_context = event.get('requestContext', {})
        request_identity = request_context.get('identity', {})
        route_key = request_body.get('routeKey', '')

        if route_key == 'GET /services':
            print("Get")
            body = {
                'message': 'Get request received successfully',
                'event': event  # Include the event data in the response body
            }
        
        elif route_key == 'POST /services':
            status_code = 201
            freelancer_id = request_identity.get('cognitoAuthenticationProvider','')
            freelancer_uuid_slice = freelancer_id.split(':')[-1]
            unique_uuid = str(uuid.uuid4())
            client.put_item(
                TableName=table_name,
                Item={
                    'id': {'S': unique_uuid},
                    'type': {'S': 'service'},
                    'title': {'S': request_body.get('title', '')},
                    'price': {'S': request_body.get('price', '')},
                    'category': {'S': request_body.get('category', '')},
                    'english_level': {'S': request_body.get('english_level', '')},
                    'delivery': {'S': request_body.get('delivery', '')},
                    'skills': {'S': request_body.get('skills', '')},
                    'country': {'S': request_body.get('country', '')},
                    'service_description': {'S': request_body.get('service_description', '')},
                    'freelancerId': {'S': freelancer_uuid_slice}
                }
            )
            body = {
                'message': f"Created service {unique_uuid}",
                'createdService': {
                    'id': unique_uuid,
                    'type': 'service',
                    'title': request_body.get('title', ''),
                    'price': request_body.get('price', ''),
                    'category': request_body.get('category', ''),
                    'english_level': request_body.get('english_level', ''),
                    'delivery': request_body.get('delivery', ''),
                    'skills': request_body.get('skills', ''),
                    'country': request_body.get('country', ''),
                    'service_description': request_body.get('service_description', ''),
                    'freelancerId': freelancer_uuid_slice
                }
            }            
        else:
            raise ValueError(f"Unsupported route: '{route_key}'")

    except Exception as e:
        status_code = 400
        body = {'error': str(e)}
        print(e)
    
    finally:
        # Convert the response body to JSON
        print(body,'this is triggered')
    return {
        'statusCode': status_code,
        'body': json.dumps(body),
        'headers': headers,
    }
